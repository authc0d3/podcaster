import { FC, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { Podcast } from "@/common/dtos";
import { Alert, PageContainer } from "@/common/components";
import { getPodcasts } from "@/podcast/apis";
import { PodcastItem, PodcastFinder } from "@/podcast/components";
import styles from "./podcastListView.module.scss";

const PodcastListView: FC = () => {
  const { data, isFetching, isError } = useQuery(["podcasts"], getPodcasts);
  const [search, setSearch] = useState<string | undefined>();

  const podcasts = useMemo((): Readonly<Podcast[]> => {
    const lowercaseSearch = search?.toLowerCase();
    return (
      data?.filter(
        (podcast) =>
          !lowercaseSearch ||
          podcast.name.toLowerCase().includes(lowercaseSearch) ||
          podcast.author.toLowerCase().includes(lowercaseSearch)
      ) || []
    );
  }, [data, search]);

  return (
    <PageContainer name="podcasts" isLoading={isFetching} isError={isError}>
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
