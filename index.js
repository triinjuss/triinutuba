import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
import Rig from "./components/Rig.js";

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling, Rig },
    
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
          
            <a-asset-item id="chandelier" src="./assets/models/Artichoke_Lamp.obj"></a-asset-item>
            <a-asset-item id="chandelier-mtl" src="./assets/models/Artichoke_Lamp.mtl"></a-asset-item>

          </a-assets>
        </template>
        <Rig>
          <!-- Rig-i sisse võib panna asju, mis peaks liikuma koos kaameraga, märksõna HUD -->
          <!-- Hetkel on siin tekstid, mis muutuvad nähtavaks, kui vaatad õige asja peale -->
          <a-text id="pilditekst" value="Autoportree" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
        </Rig>
        <Ceiling position="0 5 0">
        <a-entity material="color: white; emissive: grey; emissiveIntensity: 0.2" class="chandelier" position="0 -4.595 0" scale="0.023 0.023 0.023" obj-model="obj: #chandelier"></a-entity>  
         <!--valgus reguleerivad jubinad on siin  -->
        <a-entity light="type: point; intensity: 0.5; color: #ffffaa; castShadow: true;"  position="0 -1.5 0"></a-entity>
          <a-entity light="type: ambient; intensity: 0.2; color: #ffffaa"></a-entity>
        </Ceiling>
      	<Wall position="0 0 -5">
          <!-- seina komponenti on muudetud nii, et tema 'sisse' saab panna asju, mis peaks ta peal rippuma, vaikimisi täpselt keskel -->
          <!-- allpoolse a-plane-i küljes on evendid e. sündmused, mis muudavad selle peale vaadates õige teksti nähtavaks (ja ka nähtamatuks) -->
          <a-plane 
              position="-2 0 0"
              scale="2 3 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/mina-must-valge.png"
             class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
          ></a-plane>
          <a-plane 
              position="2 0 0"
              scale="2 3 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/varviline_mina.png"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
           ></a-plane>
     
        </Wall>
        <Wall position="0 0 -5"/>  
      	<Wall position="-5 0 0" rotation="0 90 0"/>
      	<Wall position="5 0 0" rotation="0 -90 0"/>
        <Wall position="0 0 5" rotation="0 -180 0"/>
       
        <Box  class="hover"
              position="2.774 0.48 1.506" 
              shadow="cast: true" 
              material="src: ./assets/textures/betoon.jpg; repeat: 1" 
              event-set__enter="_event: mouseenter; color: lightred"
              event-set__leave="_event: mouseleave; color: lightblue"
              
               />
        <Floor />
      </Scene>
    </Layout>
    `
});