import { useState, useEffect } from 'react';

type UseInfiniteScrollProps<T> = {
  data: T[] | undefined;
  itemsPerPage: number;
}

const useInfiniteScroll = <T,>({ data, itemsPerPage }: UseInfiniteScrollProps<T>) => {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data) {
      setVisibleItems(data.slice(0, itemsPerPage));
      setCurrentIndex(itemsPerPage);

      if (document.documentElement.scrollHeight <= window.innerHeight) {
        loadMore();
      }
    }
  }, [data]);

  const loadMore = () => {
    if (data) {
      const nextIndex = currentIndex + itemsPerPage;
      setVisibleItems(data.slice(0, nextIndex));
      setCurrentIndex(nextIndex);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex, data]);

  return { visibleItems };
};

export default useInfiniteScroll;
