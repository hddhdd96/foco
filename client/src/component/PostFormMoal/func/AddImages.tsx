import {
  ImageButton,
  ImageList,
  ImageItem,
  Image,
  ImageOver,
  ImageItemButton,
  ImageInfo,
} from '../style';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrows';

import { useState, useEffect } from 'react';

import { RiCloseFill } from 'react-icons/ri';

const AddImages = (props: any) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const fileArray: string[] = Array.from(e.target.files).map((file: any) =>
        URL.createObjectURL(file)
      );

      console.log(e.target.files);

      const newArr = [...fileArray];

      setSelectedImages((prevImages) => prevImages.concat(newArr));
      // Array.from(e.target.files).map((file: any) => URL.revokeObjectURL(file));
    }
  };

  const handleRemoveImage: any = (idx: number): void => {
    setSelectedImages([
      ...selectedImages.slice(0, idx),
      ...selectedImages.slice(idx + 1, selectedImages.length),
    ]);
  };

  const handleRemoveAllImages = (): void => {
    setSelectedImages([]);
  };

  useEffect(() => {
    props.setImageList(selectedImages);
  }, [selectedImages]);

  const renderImages = (source: string[]) => {
    return source.map((src: any, idx: number) => {
      return (
        <ImageItem className="imgItem" key={src}>
          <Image>
            <img src={src} alt="이미지 로드 실패" />
          </Image>
          <ImageOver>
            <ImageItemButton>
              <button onClick={() => handleRemoveImage(idx)}>
                <RiCloseFill />
              </button>
            </ImageItemButton>
            <ImageInfo>
              <input placeholder="ex) steak" />
              <input placeholder="ex) 15,000" />
            </ImageInfo>
          </ImageOver>
        </ImageItem>
      );
    });
  };

  type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

  const onWheel = (
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void => {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  };

  return (
    <div>
      <ImageButton>
        <label>
          Add Images
          <input
            onChange={handleImgChange}
            id="imgInput"
            type="file"
            accept="image/*"
            multiple
          />
        </label>
        <button onClick={handleRemoveAllImages}>전체 삭제</button>
      </ImageButton>
      <ImageList>
        {selectedImages.length !== 0 && (
          <ScrollMenu
            onWheel={onWheel}
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
          >
            {renderImages(selectedImages)}
          </ScrollMenu>
        )}
      </ImageList>
    </div>
  );
};

export default AddImages;