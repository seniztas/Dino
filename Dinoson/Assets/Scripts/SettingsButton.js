var myGuiBlank : GUISkin;

var btnTexture : Texture;

function OnGUI(){
	GUI.skin = myGuiBlank;
	
	if (GUI.Button(Rect(Screen.width/2-250,Screen.height/2+50,200,50),btnTexture))
		Application.LoadLevel("settings");
}