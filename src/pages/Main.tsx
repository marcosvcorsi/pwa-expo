import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";

interface Member {
  login: String;
  avatar_url: String;
}

const Main: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/members")
      .then((response) => response.json())
      .then((response) => setMembers(response));
  }, []);

  return (
    <FlatList
      contentContainerStyle={{ padding: 24 }}
      data={members}
      keyExtractor={(member) => member.login}
      renderItem={({ item: member }) => (
        <View style={styles.member}>
          <Image source={{ uri: member.avatar_url }} style={styles.image} />
          <Text>{member.login}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },

  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Main;
