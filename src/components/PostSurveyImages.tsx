'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const calculateHeight = (width: number) => {
  let calculatedHeight = width * 0.3;
  if (width > 1200) {
    calculatedHeight = calculateHeight(1199);
  }
  return calculatedHeight;
};

const PostSurveyImages = () => {
  const [selectedImages, setSelectedImages] = useState(Array(4).fill(null));
  const [windowHeight, setWindowHeight] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(calculateHeight(window.innerWidth));
    };

    if (typeof window !== 'undefined') {
      setWindowHeight(calculateHeight(window.innerWidth));
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleImageSelect = async (index: number) => {
    try {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.multiple = true;
      fileInput.click();

      fileInput.addEventListener('change', async (event: any) => {
        const selectedFiles = event.target.files;

        if (selectedFiles.length > 4) {
          console.warn('You can select up to 4 images.');
          return;
        }

        const newSelectedImages = Array(4).fill(null);
        for (let i = 0; i < selectedFiles.length; i++) {
          const imageUrl = URL.createObjectURL(selectedFiles[i]);
          newSelectedImages[i] = imageUrl;
        }

        setSelectedImages(newSelectedImages);
      });
    } catch (error) {
      console.error('Error selecting images:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center mb-20">
      <div className="grid grid-cols-2 gap-5 mb-10 w-full">
        {selectedImages.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer relative flex items-center justify-center bg-[#D9D9D9] rounded-md overflow-hidden"
            onClick={() => handleImageSelect(index)}
            style={{
              height: `${windowHeight}px`,
            }}
          >
            {image ? (
              <Image
                src={image}
                alt={`survey-image-${index + 1}`}
                fill
                objectFit="cover"
                objectPosition="top"
              />
            ) : (
              <span>
                <FaCamera fontSize={40} />
              </span>
            )}
          </div>
        ))}
      </div>
      <button className="font-candy py-4 px-16 rounded-full border w-fit self-center">
        Publish
      </button>
    </div>
  );
};

export default PostSurveyImages;
