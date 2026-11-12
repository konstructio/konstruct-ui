'use client';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FC, useMemo } from 'react';

import { Props } from './AnimatedText.types';
import { CHARACTER_HIDDEN, CHARACTER_VISIBLE } from './constants';
import { toKeyedCharacters } from './utils';

export const AnimatedText: FC<Props> = ({
  disabled,
  durationSeconds,
  label,
  text,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isStatic = disabled || Boolean(shouldReduceMotion);
  const characters = useMemo(() => {
    return toKeyedCharacters(text);
  }, [text]);
  const transition = useMemo(() => {
    return { duration: durationSeconds };
  }, [durationSeconds]);

  return (
    <>
      <span className="sr-only">{label}</span>

      <span aria-hidden="true" className="inline-flex">
        <AnimatePresence initial={false}>
          {characters.map(({ key, character }) => (
            <motion.span
              key={key}
              className="inline-block overflow-hidden whitespace-pre"
              initial={isStatic ? false : CHARACTER_HIDDEN}
              animate={CHARACTER_VISIBLE}
              exit={isStatic ? undefined : CHARACTER_HIDDEN}
              transition={transition}
            >
              {character}
            </motion.span>
          ))}
        </AnimatePresence>
      </span>
    </>
  );
};

AnimatedText.displayName = 'KonstructAnimatedText';
