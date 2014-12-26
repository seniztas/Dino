var myGuiBlank : GUISkin;

var btnTexture : Texture;

function OnGUI(){
	GUI.skin = myGuiBlank;
	
	if (GUI.Button(Rect(Screen.width/2-100,Screen.height/2-100,200,50),btnTexture))
			Application.LoadLevel("Home");
}