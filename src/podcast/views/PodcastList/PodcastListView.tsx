import { useQuery } from "@tanstack/react-query";
import { getPodcasts } from "@/podcast/api";
import { PodcastItem } from "@/podcast/components";
import styles from "./podcastListView.module.scss";

function PodcastListView() {
  const staleTime = 24 * 60 * 60; // One day of cache
  const {
    data: podcasts,
    isFetching,
    isError,
  } = useQuery(["podcasts"], getPodcasts, { staleTime });

  return (
    <>
      {isFetching && <div>Cargando podcasts...</div>}
      {isError && <div>Ups! Ocurrió un error al cargar los podcasts</div>}
      {podcasts && (
        <div className={styles.podcastList}>
          {podcasts.map((podcast, i) => (
            <PodcastItem key={i} podcast={podcast} />
          ))}
        </div>
      )}
    </>
  );
}

export default PodcastListView;
