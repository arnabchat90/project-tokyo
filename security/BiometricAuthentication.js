import React, {useEffect} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';

import {Text} from 'react-native';

function BiometricAuthentication() {
  let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
  let payload = epochTimeSeconds + 'some message';
  useEffect(() => {
    ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        console.log('TouchID is supported');
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        console.log('FaceID is supported');
      } else if (
        available &&
        biometryType === ReactNativeBiometrics.Biometrics
      ) {
        ReactNativeBiometrics.createKeys('Confirm fingerprint').then(keyObj => {
          const {publicKey} = keyObj;
          console.log(publicKey);

          ReactNativeBiometrics.createSignature({
            promptMessage: 'Sign in',
            payload: payload,
          }).then(scanObj => {
            const {success, signature} = scanObj;

            if (success) {
              console.log(signature);
            }
          });
        });
      } else {
        console.log('Biometrics not supported');
      }
    });
  }, [payload]);

  return (
    <>
      <Text>Authentication Should Start</Text>
    </>
  );
}

export {BiometricAuthentication};
