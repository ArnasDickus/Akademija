import React, { useState, useEffect, useRef, useCallback } from 'react';
import wrapper from 'baseScss/components/wrapper.module.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import classes from './settings-photo.module.scss';

const SettingsPhoto: React.FC = () => {
  const [upImg, setUpImg] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imgRef = useRef<any>(null);
  const [crop, setCrop] = useState<Crop>({ unit: '%', width: 75, height: 100 });
  const [displayAccountIcon, setDisplayAccountIcon] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const previewCanvasRef = useRef<any>(null);
  const [completedCrop, setCompletedCrop] = useState<Crop>();

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setDisplayAccountIcon(false);
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result as string));
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

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    if (
      typeof crop.width !== 'undefined' &&
      typeof crop.height !== 'undefined' &&
      typeof crop.x !== 'undefined' &&
      typeof crop.y !== 'undefined'
    ) {
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
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(event: any) => setCrop(event)}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onComplete={(event: any) => setCompletedCrop(event)}
                onImageLoaded={onLoad}
              />
            )}
          </div>
          {/* <canvas
            ref={previewCanvasRef}
            // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
            style={{
              width: Math.round(completedCrop?.width ?? 0),
              height: Math.round(completedCrop?.height ?? 0),
            }}
          /> */}
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
