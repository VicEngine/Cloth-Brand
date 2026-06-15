// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Password = () => {
//   return (
//     <View>
//       <Text>Password</Text>
//     </View>
//   )
// }

// export default Password

// const styles = StyleSheet.create({})import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const PIN_LENGTH = 8;

export default function PasswordScreen({ navigation }) {
  const [pin, setPin] = useState('');

  const handlePress = (digit) => {
    if (pin.length < PIN_LENGTH) {
      setPin((prev) => prev + digit);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Blue blob background */}
      <View style={styles.blobWrapper}>
        <View style={styles.blobLarge} />
        <View style={styles.blobSmall} />
      </View>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image
          source={require('./assets/avatar.png')} // replace with your avatar image
          style={styles.avatar}
        />
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hello, Romina!!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Type your password</Text>

      {/* PIN dots */}
      <View style={styles.dotsRow}>
        {Array.from({ length: PIN_LENGTH }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i < pin.length ? styles.dotFilled : styles.dotEmpty,
            ]}
          />
        ))}
      </View>

      {/* Optional: Delete button */}
      {pin.length > 0 && (
        <TouchableOpacity onPress={handleDelete} style={styles.deleteBtn}>
          <Text style={styles.deleteText}>⌫ Delete</Text>
        </TouchableOpacity>
      )}

      {/* Number pad */}
      <View style={styles.numPad}>
        {[
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['', '0', '⌫'],
        ].map((row, rowIdx) => (
          <View key={rowIdx} style={styles.numRow}>
            {row.map((key, colIdx) => (
              <TouchableOpacity
                key={colIdx}
                style={[styles.numKey, key === '' && { opacity: 0 }]}
                onPress={() => {
                  if (key === '⌫') handleDelete();
                  else if (key !== '') handlePress(key);
                }}
                disabled={key === ''}
              >
                <Text style={styles.numText}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  // Blobs
  blobWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 320,
  },
  blobLarge: {
    position: 'absolute',
    top: -60,
    left: -40,
    width: width * 0.95,
    height: 320,
    borderRadius: 200,
    backgroundColor: '#2B5EFF',
  },
  blobSmall: {
    position: 'absolute',
    top: 80,
    right: -60,
    width: width * 0.6,
    height: 260,
    borderRadius: 160,
    backgroundColor: '#DDE6FF',
    zIndex: -1,
  },

  // Avatar
  avatarWrapper: {
    marginTop: 140,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
  },

  // Text
  greeting: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: '700',
    color: '#111',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#888',
  },

  // PIN dots
  dotsRow: {
    flexDirection: 'row',
    marginTop: 28,
    gap: 12,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  dotFilled: {
    backgroundColor: '#2B5EFF',
  },
  dotEmpty: {
    backgroundColor: '#D9D9D9',
  },

  // Delete hint
  deleteBtn: {
    marginTop: 12,
  },
  deleteText: {
    color: '#aaa',
    fontSize: 13,
  },

  // Number pad
  numPad: {
    marginTop: 36,
    gap: 16,
  },
  numRow: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
  },
  numKey: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F4F6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#111',
  },
});
