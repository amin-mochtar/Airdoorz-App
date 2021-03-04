import React, {useState} from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const Guest = () => {

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    return (
        <View>
            {/* row 1 adults */}
            <View style={styles.row}>
                {/* title */}
                <View>
                    <Text style={{fontWeight: 'bold'}}>Adults</Text>
                    <Text style={{color: '#8d8d8d'}}>Ages 13 or Above</Text>
                </View>

                {/* button */}
                <View style={styles.buttonWrapper}>
                    <Pressable 
                        style={styles.button}
                        onPress={() => setAdults(Math.max(0, adults-1))}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>
                

                    <Text style={styles.count}>{adults}</Text>

                    <Pressable 
                        style={styles.button}
                        onPress={() => setAdults(adults+1)}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* row 2 Childrem */}
            <View style={styles.row}>
                {/* title */}
                <View>
                    <Text style={{fontWeight: 'bold'}}>Children</Text>
                    <Text style={{color: '#8d8d8d'}}>Ages 2-12 years old</Text>
                </View>

                {/* button */}
                <View style={styles.buttonWrapper}>
                    <Pressable 
                        style={styles.button}
                        onPress={() => setChildren(Math.max(0, children-1))}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>
                

                    <Text style={styles.count}>{children}</Text>

                    <Pressable 
                        style={styles.button}
                        onPress={() => setChildren(children+1)}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* row 3 infants */}
            <View style={styles.row}>
                {/* title */}
                <View>
                    <Text style={{fontWeight: 'bold'}}>Infants</Text>
                    <Text style={{color: '#8d8d8d'}}>Under 2 years</Text>
                </View>

                {/* button */}
                <View style={styles.buttonWrapper}>
                    <Pressable 
                        style={styles.button}
                        onPress={() => setInfants(Math.max(0, infants-1))}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>
                

                    <Text style={styles.count}>{infants}</Text>

                    <Pressable 
                        style={styles.button}
                        onPress={() => setInfants(infants+1)}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Guest

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1, 
        borderColor: 'lightgrey', 
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonWrapper: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    count: {
        marginHorizontal: 20,
        fontSize: 17
    }
})
