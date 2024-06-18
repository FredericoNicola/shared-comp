import { Button } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export function CustomButton () {
    const btnPress = () =>{
        console.log("AFINAL É MESME FACIL PAH")        
    }
    return (
        <>
        <Button title="EU SOU O BTN QUE ESTA NO SHARED" onPress={btnPress}/>        
        </>
    )
}