"use client";
import React from "react";
import s from "./styles.module.scss";
import { Wrapper } from "../wrapper";
import { VimeoEmbed } from "@/sanity/sanity-types";
import { processVimeoUrl } from "@/utils/vimeoHelpers";

export const Video = ({ video }: { video: VimeoEmbed }) => {
  const processedVideo = processVimeoUrl(video.url || "", {
    autoplay: false,
    muted: true,
    loop: true
  });

  if (!processedVideo.responsiveEmbed) return <></>;

  return (
    <div className={s.videoGalleryWrapper}>
      <Wrapper>
        <div className={s.selectedVideoWrapper}>
          <div
            dangerouslySetInnerHTML={{ __html: processedVideo.responsiveEmbed }}
          ></div>
          <h3 className={s.title}>{video.title}</h3>
          <p className={s.description}>{video.description}</p>
        </div>
      </Wrapper>
    </div>
  );
};
