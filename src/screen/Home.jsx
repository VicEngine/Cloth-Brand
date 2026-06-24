import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const Data = [
    {
      id: '1',
      image: require('../assets/images/pic2.png'),

    },

    {
      id: '2',
      image: require('../assets/images/pic3.png'),

    },
    {
      id: '3',
      image: require('../assets/images/pic4.png'),

    },
    {
      id: '4',
      image: require('../assets/images/pic5.png'),

    },
    {
      id: '5',
      image: require('../assets/images/pic6.png'),

    },

  ]

  const Story = [
    {
      id: '1',
      image: require('../assets/images/pic01.png'),
      livecard: require('../assets/icons/baige.png'),
    },
    {
      id: '2',
      image: require('../assets/images/pic02.png'),

    },
    {
      id: '3',
      image: require('../assets/images/pic03.png'),

    },
    {
      id: '4',
      image: require('../assets/images/pic04.png'),

    },
  ]

  const New = [
    {
      id:'1',
      image:require('../assets/images/pro33.png'),
     price:'$17,oo'
    },
    {
      id:'2',
      image:require('../assets/images/pro35.png'),
      price:'$32,oo'
    },
    {
      id:'3',
      image:require('../assets/images/pro34.png'),
      price:'$21,oo' 
    },
  ]
  const renderItem = ({ item }) => (
    <View style={{ justifyContent: "center", paddingHorizontal: 10, marginTop: 10 }}>
      <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#707070", }}>
        <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 50 }} />
      </View>
    </View>
  )

  const stories = ({ item }) => (
    <View >
      <View style={styles.piccontainer}>
        <Image
          source={item.image}
          style={styles.pic}
        />
      </View>
      <View style={styles.live}>
        <Image source={item.livecard} />
      </View>

      <TouchableOpacity style={styles.play}>
        <Image source={require('../assets/icons/play.png')} />
      </TouchableOpacity>
    </View>
  )

  const NewItem = ({item}) => (
      <View>
        <View style={styles.space}>
          <View style={styles.pro}>
            <Image source={item.image} />
          </View>
          <Text style={styles.protitle}>
           Lorem ipsum dolor sit {'\n'} amet consectetur.
          </Text>
          <Text style={styles.proprice}>
          {item.price}
          </Text>
          </View>
        </View>
  )
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}>
              <Image source={require('../assets/images/pic1.png')} />
            </View>
            <View style={{ width: 115, height: 35, backgroundColor: "#004cFF", borderRadius: 35, alignItems: "center", justifyContent: "center" }}>
              <Text>
                My Activity
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
            <Image source={require('../assets/icons/Icon.png')} />
            <Image source={require('../assets/icons/Messages.png')} />
            <Image source={require('../assets/icons/Frame.png')} />
          </View>
        </View>

        <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 20 }}>
          Hello,Romina!
        </Text>

        <View style={{ width: "100%", height: 70, backgroundColor: "#F8F8F8", marginTop: 20, justifyContent: "center", paddingHorizontal: 15, gap: 4 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", }}>
            Announcement
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 10, fontWeight: "regular", color: "#202020" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.{'\n'}Maecenas hendrerit luctus libero ac vulputate
            </Text>

            <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: "#0C54FF", alignItems: "center", justifyContent: "center" }}>
              <Image source={require('../assets/images/Arrow.png')} />
            </TouchableOpacity>

          </View>
        </View>
        <Text style={styles.title}>
          Recently Viewed
        </Text>
        <View>
          <FlatList
            data={Data}
            renderItem={renderItem}
            horizontal
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text style={styles.title}>
          My Orders
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15, marginTop: 20 }}>
          <TouchableOpacity style={{ width: 86, height: 35, backgroundColor: "#E5EBFC", borderRadius: 20, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ color: '#0042E0', fontSize: 16, fontWeight: "medium" }}>
              To Pay
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={{ width: 118, height: 35, backgroundColor: "#E5EBFC", borderRadius: 20, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ color: '#0042E0', fontSize: 16, fontWeight: "medium" }}>
              To Recieve
            </Text>
            <View style={styles.dot}></View>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 118, height: 35, backgroundColor: "#E5EBFC", borderRadius: 20, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ color: '#0042E0', fontSize: 16, fontWeight: "medium" }}>
              To Review
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          Stories
        </Text>

        <View>
          <FlatList
            data={Story}
            renderItem={stories}
            keyExtractor={(item) => item.id}
            horizontal

          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={styles.title}>
              New Items
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginTop: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              See All
            </Text>
            <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: "#0C54FF", alignItems: "center", justifyContent: "center" }}>
              <Image source={require('../assets/images/Arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
<View>
  <FlatList
  data={New}
  renderItem={NewItem}
  keyExtractor={(item)=>item.id}
  horizontal
  />
</View>
      
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 20
  },
  dot: {
    position: "absolute",
    top: 0,
    right: -5,
    width: 14,
    height: 14,
    backgroundColor: '#08C514',
    borderRadius: 14
  },
  title: {
    marginTop: 15,
    fontSize: 21,
    fontWeight: "bold"
  },
  piccontainer: {

  },
  pic: {
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40
  },
  live: {
    position: "absolute",
    top: 12,
    left: 15,
  },
  play: {
    position: "absolute",
    top: 75,
    left: 50,
  },
  pro: {
    width: 140,
    height: 140,
    backgroundColor: '#ffff',
    alignItems: "center",
    justifyContent: "center", 
    borderRadius: 10,
    marginTop:10,
  },
  protitle:{
    fontSize:12,
    fontWeight:"regular",
    fontFamily:'Nunito Sans'
  },
  proprice:{
    fontSize:17,
    fontWeight:"bold",
    fontFamily:'Raleway',
    marginTop:8
  },
  space:{
    paddingHorizontal:5
  },
})