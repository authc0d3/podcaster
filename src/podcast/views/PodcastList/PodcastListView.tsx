import { FC, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Podcast } from "@/common/dtos";
import { Alert } from "@/common/components";
import { getPodcasts } from "@/podcast/api";
import { PodcastItem, PodcastFinder } from "@/podcast/components";
import styles from "./podcastListView.module.scss";

const PodcastListView: FC = () => {
  const staleTime = 24 * 60 * 60; // One day of cache
  const { data, isFetching, isError } = useQuery(["podcasts"], getPodcasts, {
    staleTime,
  });
  const [podcasts, setPodcasts] = useState<Podcast[]>();
  const [search, setSearch] = useState<string | undefined>();
  const showPodcastList = !isFetching && !isError;

  function handleFilterPodcasts(): void {
    const lowercaseSearch = search?.toLowerCase();
    setPodcasts(
      data?.filter(
        (podcast) =>
          !lowercaseSearch ||
          podcast.name.toLowerCase().includes(lowercaseSearch) ||
          podcast.author.toLowerCase().includes(lowercaseSearch)
      )
    );
  }

  useEffect(() => {
    handleFilterPodcasts();
  }, [data, search]);

  return (
    <div className={styles.podcastListView}>
      {isFetching && (
        <Alert
          text="Loading podcasts, please wait..."
          type="loading"
          className={styles.alert}
          showIcon
        />
      )}
      {!isFetching && isError && (
        <Alert
          text="Ups! An error occurred while loading podcasts"
          type="error"
          className={styles.alert}
          showIcon
        />
      )}
      {showPodcastList && (
        <>
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
        </>
      )}
    </div>
  );
};

export default PodcastListView;
