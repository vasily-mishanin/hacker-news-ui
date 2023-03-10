import { useState } from 'react';

export default function CollapsedText({
  text,
  length,
}: {
  text: string;
  length: number;
}) {
  const [showHidden, setShowHidden] = useState(false);
  const shownText = text.slice(0, length);
  const hiddenText = text.slice(length);
  return (
    <p
      className='text-green text-xs cursor-pointer'
      onClick={() => setShowHidden(!showHidden)}
    >
      {shownText}
      {!showHidden && hiddenText && (
        <span className='text-gray-500'>...read more</span>
      )}

      {showHidden && <span>{hiddenText} </span>}
      {showHidden && <span className='text-gray-500'>...show less</span>}
    </p>
  );
}
