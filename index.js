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
          

            <a-asset-item id="pink" src="./assets/models/pink.obj"></a-asset-item>
            <a-asset-item id="pink-mtl" src="./assets/models/pink.mtl"></a-asset-item>
          
          <a-asset-item id="chandelier" src="./assets/models/Artichoke_Lamp.obj"></a-asset-item>
            <a-asset-item id="chandelier-mtl" src="./assets/models/Artichoke_Lamp.mtl"></a-asset-item>

          </a-assets>
        </template>

         <!-- blenderist imporditud .obj-mudel koos .mtl-materjalidega; vt a-assets ülalpool -->
    

        <a-entity class="pink" position="-1.51 0.18 0" scale="5 5 5" obj-model="obj: #pink; mtl: #pink-mtl"></a-entity>  
        <a-entity class="pink" position=" 1.51  0.18 0" rotation="0 -180 0" scale="5 5 5" obj-model="obj: #pink; mtl: #pink-mtl"></a-entity>  
        <a-entity class="pink" position=" -0,08  0.22 2,75" rotation="0 90 0" scale="5 5 5" obj-model="obj: #pink; mtl: #pink-mtl"></a-entity>  
        <a-entity class="pink" position=" -0,08  0.22 -2.75" rotation="0 -90 0" scale="5 5 5" obj-model="obj: #pink; mtl: #pink-mtl"></a-entity>  



        <Rig>
          <!-- Rig-i sisse võib panna asju, mis peaks liikuma koos kaameraga, märksõna HUD -->
          <!-- Hetkel on siin tekstid, mis muutuvad nähtavaks, kui vaatad õige asja peale -->

          <a-entity id="pilditekst" visible="false" position="0 -0.2 -0.5">
            <a-text value="autor Triin Juss" width="0.6" align="center" color="black" />
            <a-plane material="shader: flat" color="grey" opacity="0.3" scale="0.5 0.1 0" />
          </a-entity>

          <a-text id="kuubikutekst" value="skulptuur" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="pilditekst" value="Autoportree" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
        </Rig>

        <Ceiling position="0 5 0">
        <a-entity material="color: grey; emissive: grey; emissiveIntensity: " class="chandelier" position="0 -4.595 0" scale="0.023 0.023 0.023" obj-model="obj: #chandelier"></a-entity>  
        

         <!--valgus reguleerivad jubinad on siin  -->
       
        </Ceiling>


      	<Wall position="0 0 -5">
          <!-- seina komponenti on muudetud nii, et tema 'sisse' saab panna asju, mis peaks ta peal rippuma, vaikimisi täpselt keskel -->
          <!-- allpoolse a-plane-i küljes on evendid e. sündmused, mis m4udavad selle peale vaadates õige teksti nähtavaks (ja ka nähtamatuks) -->
          
          <a-plane 
              position="3 0 0"
              scale="2 3 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/mina-must-valge.png"
              
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
          ></a-plane>

          <a-plane 

              position="0 0 0"
              scale="2 3.1 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/varviline_mina.png"
              
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
           ></a-plane>
           <a-plane
                position="-3 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/ajaleht-mina.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>


        </Wall>

           <Wall position="-5 0 0" rotation="0 90 0">
          <a-plane
          position="2 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/sinine_momocrom.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-plane
                position="-0.5 0 0"
                scale="2 3.1 0"
                material="src: ./assets/pildid/ouna_pilt.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-plane
                position="-3 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/kannud_burn.jpg"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>

            <!-- <a-text font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" position="0 -1.2 0" value="untitled, 2019. Hõbetrükk." align="center" /> -->
</Wall>
<Wall position="5 0 0" rotation="0 -90 0">
          <a-plane
                position="-3 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/portree_mv.jpg"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-plane
                position="0.3 0 0"
                scale="2 2 0"
                material="src: ./assets/pildid/tintekatoo.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-plane
                position="3 0 0"
                scale="2 2 0"
                material="src: ./assets/pildid/joonistus_ymarad_vormid.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>

          <!-- <a-text font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" position="0 -1.2 0" value="untitled, 2019. Hõbetrükk." align="center" /> -->
</Wall>
<Wall position="0 0 5" rotation="0 -180 0">
          <a-plane
                position="3 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/sinine_vv.jpg"
                
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-plane
            position="0 0 0"
                scale="2 3.1 0"
                material="src: ./assets/pildid/jaapan.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-plane
            position="-3 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/veski.png"

                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>

          <!-- <a-text font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" position="0 -1.2 0" value="untitled, 2019. Hõbetrükk." align="center" /> -->
</Wall>


        
<Wall position="0 0 -5"/>  
        <Wall position="-5 0 0" rotation="0 90 0"/></Wall>
      	<Wall position="5 0 0" rotation="0 -90 0"/></Wall>
        <Wall position="0 0 5" rotation="0 -180 0"/></Wall> 
       
        <Box  class="hover"
              position="0 0.3 0.12" 
              scale="1 1 1"
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