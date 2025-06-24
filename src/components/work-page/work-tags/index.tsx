'use client';
import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import { WorkPage } from '@/sanity/sanity-types';
import { Tag } from './tag';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export const WorkTags = ({
  work,
  activeTags,
  setActiveTags,
}: {
  work: WorkPage[];
  activeTags: string[];
  setActiveTags: (a: string[]) => void;
}) => {
  const [tags, setTags] = useState<string[] | null>();

  const router = useRouter();
  const searchParams = useSearchParams();

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

  useEffect(() => {
    const currentFilter = searchParams.getAll('filter');
    setActiveTags(currentFilter);
  }, []);

  const addOrRemove = (tag: string) => {
    if (!activeTags.includes(tag)) {
      setActiveTags([...activeTags, tag]);

      const currentFilter = searchParams.getAll('filter');
      currentFilter.push(tag);
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete('filter');
      currentFilter.forEach((fil) => newSearchParams.append('filter', fil));
      router.push(`?${newSearchParams.toString()}`);
    } else {
      setActiveTags(activeTags.filter((item) => item !== tag));

      const currentFilter = searchParams.getAll('filter');
      const newFilter = currentFilter.filter((item) => item !== tag);
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete('filter');
      newFilter.forEach((fil) => newSearchParams.append('filter', fil));
      router.push(`?${newSearchParams.toString()}`);
    }
  };

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
