import { GenericPage } from "@/components/generic-page";
import { Page } from "@/sanity/sanity-types";
import React from "react";
import { getGeneric } from "@/sanity/sanity.query";

const options = { next: { revalidate: 30 } };

export default async function Overview() {
  const data: Page[] = await getGeneric("overview", options);

  if (!data) return <></>;
  return (
    <div>
      <GenericPage data={data[0]} />
    </div>
  );
}
