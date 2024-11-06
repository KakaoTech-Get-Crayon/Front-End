import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";

import { RootView } from "@/components/Container";
import { colors } from "@/styles/globalColors";

const BOOKSHELF = require("@/assets/images/bookshelf.png");

// 책 색상 매핑
const BOOK_COLORS: { [key: number]: any } = {
  0: require("@/assets/images/book_red.png"),
  1: require("@/assets/images/book_purple.png"),
  2: require("@/assets/images/book_green.png"),
  3: require("@/assets/images/book_yellow.png"),
  4: require("@/assets/images/book_red.png"),
  5: require("@/assets/images/book_purple.png"),
};

// 더미 데이터 타입
interface Book {
  bookId: string;
  userId?: string;
  title?: string;
  content?: string;
  picture?: string;
  empty?: boolean; // 빈 슬롯인지 여부
}

interface PageInfo {
  totalBooks: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  limit: number;
}

// DUMMY_DATA 타입
const DUMMY_DATA = {
  books: [
    {
      bookId: "710b962e-041c-11e1-9234-0123456789ab",
      userId: "92f62d9e-22c4-11ef-97e9-325096b39f47",
      title: "동화 제목 1",
      content: "동화 내용 1",
      picture: "https://via.placeholder.com/100",
    },
    {
      bookId: "2c5ea4c0-4067-11e9-9bdd-2b0d7b3dcb6d",
      userId: "92f62d9e-22c4-11ef-97e9-325096b39f47",
      title: "동화 제목 2",
      content: "동화 내용 2",
      picture: "https://via.placeholder.com/100",
    },
    {
      bookId: "1ef22c49-2f62-6d9e-97e9-325096b39f47",
      userId: "92f62d9e-22c4-11ef-97e9-325096b39f47",
      title: "동화 제목 3",
      content: "동화 내용 3",
      picture: "https://via.placeholder.com/100",
    },
  ] as Book[],
  page: {
    totalBooks: 3,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    page: 1,
    limit: 6,
  } as PageInfo,
};

const fillEmptySlots = (data: Book[]): Book[] => {
  const totalSlots = 6; // 무조건 6개 슬롯 보장
  const filledData = [...data];
  const emptySlotsNeeded = totalSlots - data.length;

  for (let i = 0; i < emptySlotsNeeded; i++) {
    filledData.push({ bookId: `empty-${i}`, empty: true });
  }

  return filledData;
};

const BookShelf: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const data = DUMMY_DATA.books;
    const filledData = fillEmptySlots(data);

    setBooks([...filledData]);
  }, []);

  const renderItem: ListRenderItem<Book> = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={styles.itemContainer}>
          <Image source={BOOKSHELF} style={styles.shelfSlot} />
        </View>
      );
    }

    const bookColor = BOOK_COLORS[index % 6];

    return (
      <View style={styles.itemContainer}>
        <ImageBackground source={BOOKSHELF} style={styles.shelfSlot}>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
            <Image source={bookColor} style={styles.bookIcon} />
            <Image source={{ uri: item.picture }} style={styles.coverImage} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  const loadBooks = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    // 여기에 추가 데이터를 불러오는 로직을 추가
    setTimeout(() => setLoading(false), 1000); // 로딩 시뮬레이션
  };

  return (
    <RootView viewStyle={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.bookId}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        onEndReached={loadBooks}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color="#0000ff" />
        }
      />
    </RootView>
  );
};

export default BookShelf;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  flatListContainer: {
    alignItems: "center",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderColor: colors.bookshelf,
  },
  itemContainer: {
    margin: 5,
  },
  shelfSlot: {
    width: 179,
    height: 214,
    alignItems: "center",
    justifyContent: "center",
  },
  bookIcon: {
    width: 169,
    height: 206,
    borderRadius: 26,
  },
  coverImage: {
    width: 123,
    height: 159.5,
    resizeMode: "cover",
    position: "absolute",
    top: 6,
    right: 6,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
});
