let transitionTimeFreezed = false;

export const updateElementTransition = (element, transition) => {
  if (!transitionTimeFreezed) {
    if (element) {
      if (element.style.transition !== transition) {
        element.style.transition = transition;

        transitionTimeFreezed = true;
        setTimeout(() => {
          transitionTimeFreezed = false;
        }, 1000 * parseInt(transition, 10));
      }
    }
  }
};

export const handleScroll = ({ deltaY }, currentPosition, appearDistance, element) => {
  const nextPosition = currentPosition + (deltaY / 3);

  if (currentPosition > appearDistance && nextPosition <= appearDistance) {
    updateElementTransition(element, '0.5s');
    return nextPosition - appearDistance - (nextPosition - appearDistance);
  } else if (currentPosition <= 0 && nextPosition >= 0) {
    updateElementTransition(element, '0.5s');
    return nextPosition + appearDistance;
  } else if (nextPosition >= 0) {
    updateElementTransition(element, '0.1s');
    return nextPosition;
  } else {
    return currentPosition;
  }
};
