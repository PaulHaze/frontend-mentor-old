import * as React from 'react';
import { useState } from 'react';

import { SubmittedModal } from './SubmittedModal';
import { FeedbackCard } from './FeedbackCard';

import type { RatingRange } from './Types';

export function FeedbackContainer() {
  const [selectedRating, setSelectedRating] =
    React.useState<RatingRange | null>(null);

  const [showModal, setShowModal] = useState(false);

  const handleSelectRating = (selection: RatingRange) => {
    setSelectedRating(selection);
  };

  return showModal ? (
    <SubmittedModal
      hideModal={() => setShowModal(false)}
      rating={selectedRating}
    />
  ) : (
    <FeedbackCard
      showModal={() => setShowModal(true)}
      selectedRating={selectedRating}
      handleSelectRating={handleSelectRating}
    />
  );
}
