import Image from 'next/image';
import ModalImg from '@/assets/img/feedback/thankyou-modal.svg';

import { overpass } from './Font';

import styles from './Feedback.module.scss';

import type { RatingRange } from './Types';

type SubmittedModalProps = {
  rating: RatingRange | undefined;
  hideModal: () => void;
};

export function SubmittedModal({ rating, hideModal }: SubmittedModalProps) {
  return (
    <div
      onClick={hideModal}
      className="fixed top-0 left-0 z-20 w-screen h-screen bg-black/50 backdrop-blur-sm flex-center px-4"
    >
      <div className={`${overpass.className} ${styles.container}`}>
        {/* IMAGE */}
        <div className="flex justify-center mt-3">
          <Image src={ModalImg} alt="Thank you image" />
        </div>

        {/* RATING */}
        <div className="bg-[#262F38] rounded-[18px] text-[#FC7613] px-5 py-1 pt-1.5 text-[16px] mt-8 font-[500]">
          You selected {rating} out of 5
        </div>
        {/* THANK YOU */}
        <h1 className="text-white mt-7 text-3xl font-[500]">Thank you!</h1>
        {/* OTHER TEXT */}
        <p className="text-white text-center mt-2 leading-6 text-[16px] px-0.5">
          We appreciate you taking the time to give a rating. If you ever need
          more support don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
