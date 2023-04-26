import { FC, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Alert, PageContainer } from "@/common/components";
import { PodcastItem, PodcastFinder } from "@/podcast/components";
import styles from "./podcastListView.module.scss";
import { usePodcastApi } from "@/podcast/hooks";

const PodcastListView: FC = () => {
  const [search, setSearch] = useState<string | undefined>();
  const { podcasts, isLoading, isError } = usePodcastApi({
    searchPodcast: search,
  });

  return (
    <PageContainer name="podcasts" isLoading={isLoading} isError={isError}>
      <Helmet>
        <title>Podcaster - Top podcasts</title>
      </Helmet>
      <PodcastFinder onSearch={setSearch} />
      <div className={styles.podcastList}>
        {podcasts && podcasts.length ? (
          podcasts.map((podcast, i) => (
            <PodcastItem key={i} podcast={podcast} />
          ))
        ) : (
          <Alert
            text="There are no podcasts to listen to."
            type="info"
            className={styles.alert}
            showIcon
          />
        )}
      </div>
    </PageContainer>
  );
};

export default PodcastListView;
