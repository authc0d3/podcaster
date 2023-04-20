import { LabeledProp } from "./LabeledProp";

export interface PodcastDto {
  readonly id: {
    readonly attributes: {
      [key: string]: string;
    };
  };
  readonly "im:name": LabeledProp;
  readonly "im:artist": LabeledProp;
  readonly "im:image": Readonly<LabeledProp>[];
}

export interface PodcastResponse {
  readonly feed: {
    readonly entry: Readonly<PodcastDto[]>;
  };
}

export interface Podcast {
  readonly id: string;
  readonly name: string;
  readonly author: string;
  readonly imageUrl?: string;
}
