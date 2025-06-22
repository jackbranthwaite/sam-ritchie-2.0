'use client';
import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import { WorkPage } from '@/sanity/sanity-types';
import { Tag } from './tag';

export const WorkTags = ({ work }: { work: WorkPage[] }) => {
  const [tags, setTags] = useState<string[] | null>();
  const [activeTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    const _tags: string[] = [];
    work.map((page) => {
      page?.workTags?.map((tag) => {
        if (tag.label && !_tags.includes(tag.label)) {
          _tags.push(tag.label);
        }
      });
    });
    if (_tags.length) setTags(_tags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addOrRemove = (tag: string) => {
    if (!activeTags.includes(tag)) {
      setActiveTags([...activeTags, tag]);
    } else {
      console.log('remove');
    }
  };

  console.log(activeTags);

  return (
    <div className={s.workTagsWrapper}>
      {tags &&
        tags.map((tag, i) => {
          return (
            <Tag
              key={i}
              tag={tag}
              onClick={() => addOrRemove(tag)}
              activeTags={activeTags}
            />
          );
        })}
    </div>
  );
};
