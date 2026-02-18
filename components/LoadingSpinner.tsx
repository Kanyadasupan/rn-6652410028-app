import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const TaxiLoader = ({ size = 80, color = '#2ecc71' }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // สร้างฟังก์ชันสำหรับการหมุนที่ไม่มีวันหยุด
    const runAnimation = () => {
      spinValue.setValue(0); // รีเซ็ตค่าเป็น 0 เสมอเมื่อเริ่มรอบใหม่
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1200, // ลองเพิ่มเป็น 1200ms จะดูนุ่มนวลกว่า 1000ms ครับ
        easing: Easing.linear, // สำคัญมาก: ต้องเป็น linear เท่านั้นเพื่อให้ความเร็วคงที่
        useNativeDriver: true,
      }).start(() => runAnimation()); // สั่งให้รันตัวเองซ้ำเมื่อจบ
    };

    runAnimation();
  }, [spinValue]);

  // การตั้งค่า interpolate ต้องแม่นยำ 0-1 ไปหา 0-360
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* ปรับลำดับการเฟดให้สมดุลขึ้นเพื่อให้ดูไม่แหว่งเวลาหมุนเร็วๆ */}
          <Path d="M12 2v4" strokeOpacity="1.0" />
          <Path d="m16.2 7.8 2.9-2.9" strokeOpacity="0.8" />
          <Path d="M18 12h4" strokeOpacity="0.6" />
          <Path d="m16.2 16.2 2.9 2.9" strokeOpacity="0.4" />
          <Path d="M12 18v4" strokeOpacity="0.25" />
          <Path d="m4.9 19.1 2.9-2.9" strokeOpacity="0.15" />
          <Path d="M2 12h4" strokeOpacity="0.1" />
          <Path d="m4.9 4.9 2.9 2.9" strokeOpacity="0.05" />
        </Svg>
      </Animated.View>
    </View>
  );
};

export default TaxiLoader;