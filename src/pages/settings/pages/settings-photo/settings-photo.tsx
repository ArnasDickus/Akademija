// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect, useRef, useCallback } from 'react';
import wrapper from 'baseScss/components/wrapper.module.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactCrop from 'react-image-crop';

import classes from './settings-photo.module.scss';

const SettingsPhoto: React.FC = () => {
  const [upImg, setUpImg] = useState<string | ArrayBuffer | null>(null);
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 16 / 9 });
  const [displayAccountIcon, setDisplayAccountIcon] = useState(true);
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState(null);

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setDisplayAccountIcon(false);
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image: any = imgRef.current;
    const canvas: any = previewCanvasRef.current;
    const crop: any = completedCrop;

    if (image && crop && canvas) {
      const scaleX = image?.naturalWidth / image?.width;
      const scaleY = image?.naturalHeight / image?.height;
      const ctx = canvas.getContext('2d');
      const pixelRatio = window.devicePixelRatio;

      canvas.width = crop.width * pixelRatio;
      canvas.height = crop.height * pixelRatio;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      );
    }
  }, [completedCrop]);

  return (
    <div className={classes.container}>
      <div className={wrapper.profileSettingsWrapper}>
        <p>Image preview</p>
        <div className={classes.previewContainer}>
          <div className={classes.imgUpload}>
            {displayAccountIcon ? (
              <AccountCircleIcon className={classes.icon} />
            ) : (
              <ReactCrop
                className={classes.image}
                crop={crop}
                src={upImg}
                onChange={(c: any) => setCrop(c)}
                onComplete={(c: any) => setCompletedCrop(c)}
                onImageLoaded={onLoad}
              />
            )}
          </div>
          <canvas
            ref={previewCanvasRef}
            // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
            style={{
              width: Math.round(completedCrop?.width ?? 0),
              height: Math.round(completedCrop?.height ?? 0),
            }}
          />
        </div>
        <p>Add / Change image:</p>
        <Button component="label" variant="contained">
          Upload File
          <input type="file" hidden onChange={(event) => onSelectFile(event)} />
        </Button>
      </div>
    </div>
  );
};

export default SettingsPhoto;
