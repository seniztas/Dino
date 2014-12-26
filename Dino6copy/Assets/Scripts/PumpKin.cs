using UnityEngine;
using System.Collections;

public class PumpKin : MonoBehaviour {
	
	public float speed = 300;

	void Update () {

		transform.Rotate(Vector3.forward * speed * Time.deltaTime,Space.World);
	}
	
	
	void OnTriggerEnter(Collider c) {
		Debug.Log("c.tag");
		if (c.tag == "Player") {
			Application.LoadLevel("Home");
			//c.GetComponent<Entity>().TakeDamage(10);
		}
	}
}
