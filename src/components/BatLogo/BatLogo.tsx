import React from 'react';
import { Image } from 'react-native';

import batLogo from '../../../assets/bat-logo.svg'

export function BatLogo() {
    return (
        <>
            <Image
                source={batLogo}
                style={{
                    resizeMode: 'contain',
                    height: 180
                }}
            />
        </>
    );
}