# hlei9131-_Hongde-Lei_idea9103_tut06

## Code Interaction Description<br>
**Play or stop the music**: <br>
User can play the audio by clicking the ‘play/pause’ button in the centre of the screen, the circle on the screen will play an animation according to the frequency of the music.<br>
**Panning change**: <br>
When user move the mouse on the screen, the panning value will change with the change of x-axis.
<br>

## Detailed information on the animation process<br>
**Ways to drive code**:<br>
Animation is driven by playing audio and through its frequency.<br><br>
**Methods of animation**: <br>
+ Zooming in and out of arcs:<br>
The effect that the arc will fluctuate with the audio is achieved by extracting the frequency of the audio and mapping it to the length of the sides of the arc.<br>
+ Arc fluctuation distinction:<br>
Different frequencies are extracted from the two pieces of audio, which allows for an animation effect where only part of the arc fluctuates.<br>
+ Changes in Panning:<br>
As the mouse moves across the screen, the coordinates of the mouse's x are extracted and mapped to the value of pan. On this basis, as the user moves the mouse, panning is constantly changing.<br>

**Code Animation Inspiration**: <br>
I took the inspiration for this animation from Vincent van Gogh's painting ‘_Olive Trees_’. I incorporated the colour style of this painting into the artwork. I incorporated the green of the leaves and the blue of the night sky into the fruits of the trees.  In the animation, these fruits fluctuate with the rhythmic audio, creating a unique audio-visual experience. This coordination makes the work more dynamic on a visual level.<br>

![Olive Trees](asserts/Olive%20Trees.png)

**Code references and technical instructions**
+ Changes to group codes:<br>
For the group code, I mainly changed the bottom of the tree pattern as well as the colour scheme. And added an adaptive window feature to the pattern.<br>
+ Application of the createGraphics:<br>
I draw the background texture via createGraphics. createGraphics returns the texture as an image in the code, which keeps the noise in the texture from constantly moving due to its random properties.<br>
[createGraphics](https://p5js.org/reference/#/p5/createGraphics)<br>
+ Application of the isPlaying property:<br>
With the isPlaying property, the animation implements the operation of playing and stopping two audios at the same time with a single button.The button plays or stops the music by extracting the state of the isPlaying property.<br>
[isPlaying property](https://p5js.org/reference/#/p5.SoundFile/isPlaying)<br>

## Reference
>Reference | createGraphics(). (n.d.). Retrieved 
from https://p5js.org/reference/#/p5/createGraphics  

>Reference | isPlaying(). (n.d.). Retrieved
from https://p5js.org/reference/#/p5.SoundFile/isPlaying  

>The Real Group. (n.d.). Words—The Real Group. Retrieved from https://open.spotify.com/artist/4EIXOUTnf8Gtbk2kq4LYNK


>Vincent van Gogh. The Olive Trees. Saint Rémy, June-July 1889 | MoMA. (n.d.). Retrieved
from https://www.moma.org/collection/works/80013

