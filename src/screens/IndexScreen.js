import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList,Button } from 'react-native'
import {Context} from '../context/BlogContext'
const IndexScreen = () => {

    const {state,addBlogPost,deleteBlogPost} = useContext(Context)
    return(
        <View>
            
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList 
                data = {state}
                keyExtractor = {(blogPost) => blogPost.title}
                renderItem = {({item})=>{
                    return <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Button  onPress={()=> deleteBlogPost(item.id)} style={styles.icon} title="trash"/>
                            </View>
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18,
    
    },
    icon:{
        fontSize:24
    }

})
export default IndexScreen