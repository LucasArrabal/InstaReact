
import React ,{ Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

class Lista extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };
  }

  render(){
    return(
      <View style={styles.AreaFeed}>
        <View style={styles.viewPerfil}>
          <Image
          source={{uri:this.state.feed.imgperfil}}
          style={styles.fotoPerfil}/>

          <Text  style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>
      <Image
      resizeMode='cover'
      style={styles.fotoPubli}
      source={{uri: this.state.feed.imgPublicacao}}
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
          source={require('../img/like.png')}
          style={styles.icone}
          />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btnSend}>
          <Image
          source={require('../img/send.png')}
          style={styles.icone}
          />
        </TouchableOpacity>
      </View>
      <View  style={styles.viewRodape}>
        <Text  style={styles.nomeRodape}> 
          {this.state.feed.nome}
        </Text>
        <Text  style={styles.descRodape}> 
          {this.state.feed.descricao}
        </Text>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  AreaFeed: {
    
    
  },
  viewPerfil:{
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    padding:8
  },
  fotoPerfil:{
    width: 50,
    height:50,
    borderRadius: 25
  },
  nomeUsuario:{
    fontSize:22,
    textAlign: 'left',
    color:'#000000'
  },
  fotoPubli: {
    flex:1,
    height:400,
    alignItems:'center'
  },
  areaBtn:{
    flexDirection:'row',
    padding:5
  },
  icone:{
    width:33,
    height:33
  },
  btnSend:{
    paddingLeft:5
  },
  viewRodape:{
    flexDirection:'row',
    alignItems:'center'
  },
  descRodape:{
    paddingLeft:5,
    fontSize:15,
    color:'#000'
  },
  nomeRodape:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000',
    paddingLeft:5
  }

});
export default Lista;
