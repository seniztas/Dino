var myGuiBlank : GUISkin;

var btnTexture : Texture;

function OnGUI(){
	GUI.skin = myGuiBlank;
	
	if (GUI.Button(Rect(Screen.width/2+50,Screen.height/2+50,200,50),btnTexture))
		Debug.Log("Clicked the button with an image");
}

function Update(){
     if(Input.GetMouseButtonDown(0))
			Application.LoadLevel("settings");
 }