import React from "react";
import {
  DualImageBlock,
  ImageGalleryBlock,
  SingleImageBlock,
  VimeoEmbed
} from "@/sanity/sanity-types";
import { DoubleImage } from "../double-image";
import { FullWidthImage } from "../full-width-image";
import { Gallery } from "../gallery";
import { Video } from "../video";

export const FlexibleContentContainer = ({
  data
}: {
  data: {
    contentBlocks: Array<
      SingleImageBlock | DualImageBlock | ImageGalleryBlock | VimeoEmbed
    >;
  };
}) => {
  return (
    <>
      {data.contentBlocks.map(
        (
          item:
            | SingleImageBlock
            | DualImageBlock
            | VimeoEmbed
            | ImageGalleryBlock,
          i: number
        ) => {
          if (item._type === "dualImageBlock") {
            return <DoubleImage data={item} key={i} />;
          }
          if (item._type === "singleImageBlock") {
            return <FullWidthImage data={item} key={i} />;
          }
          if (item._type === "imageGalleryBlock") {
            return <Gallery images={item} key={i} />;
          }
          if (item._type === "vimeoEmbed") {
            return <Video key={i} video={item} />;
          }
        }
      )}
    </>
  );
};
