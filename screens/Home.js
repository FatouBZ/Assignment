import React , { useState }from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Home({navigation}){
    return(  <View 
    style={{
        backgroundColor: "white",
        flex:1, 
        paddindtop: 55,
        paddingHorizontal: 20,
        
    }}
    >
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
            
        }}>

        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style= {{flexDirection:"row"}}>
        <Ionicons name="search" size={24} color="black" />
        <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        </View>

        <Text style={{ fontSize:15, color:"grey",  paddingTop:15, fontWeight:"500" }}>The World's {" "}
             <Text style={{ color : "orange", fontWeight:"bold"}}>Best Bike</Text>
        </Text>

        <Text style={{paddingTop:15, fontWeight:"bold"}}>Categories</Text>
        
        <View style= {{flexDirection:"row"}}>
            

        <TouchableOpacity
        onPress={() => {
            navigation.navigate("Cart")
        }}
           style={{ 
            backgroundColor : "lightgrey",
            marginRight:10,
             padding:10,
             borderRadius: 10,
             marginTop:20 
             }}
        >
            <Text style={{ color: "orange" , alignItems:"center"}}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ 
                backgroundColor : "lightgrey",
                marginRight:10,
                 padding:10,
                 borderRadius: 10,
                 marginTop:20 
                 }}
        >
            <Text style={{alignItems:"center"}}>RoadBike</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={{ 
               backgroundColor : "lightgrey",
               marginRight:10,
                padding:10,
                borderRadius: 10,
                marginTop:20 
                }}
        >
     <Text style={{ alignItems:"center" }}>Mountain</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ 
                backgroundColor : "lightgrey",
                marginRight:10,
                 padding:10,
                 borderRadius: 10,
                 marginTop:20 
                 }}
        >
            <Text style={{ alignItems:"center", color: "black" }}>Urbain</Text>

        </TouchableOpacity>
        </View>

        <View style={{ flex:1}}>
            
         <Image
         style={{
             marginTop:30,
             paddingTop:40,
            width: 150,
            height: 100,
            borderRadius: 10,
           
        }}
        source={require('./images/1.jpg')} 
        />
         
        </View>
           </View>
    )
    
}