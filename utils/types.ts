/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number;
  title: string;
  filename: string;
  createdAt: number;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
