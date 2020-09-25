import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {FirebaseState} from './context/firebase/firebaseState';
import {OrdersState} from './context/orders/ordersState';

import {NewOrder} from './views/NewOrder';
import {Menu} from './views/Menu';
import {MealDetail} from './views/MealDetail';
import {MealForm} from './views/MealForm';
import {OrderSummary} from './views/OrderSummary';
import {OrderProgress} from './views/OrderProgress';

import {ResumeButton} from './components/ui/ResumeButton';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <OrdersState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#FFDA00',
                },
                headerBackTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTintColor: '#000',
              }}>
              <Stack.Screen
                name="NewOrder"
                component={NewOrder}
                options={{
                  title: 'Nueva Orden',
                }}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                  title: 'Nuestro Menú',
                  headerRight: (props) => <ResumeButton />,
                }}
              />
              <Stack.Screen
                name="MealDetail"
                component={MealDetail}
                options={{
                  title: 'Detalle de Platillo',
                }}
              />
              <Stack.Screen
                name="MealForm"
                component={MealForm}
                options={{
                  title: 'Formulario de Platillo',
                }}
              />
              <Stack.Screen
                name="OrderSummary"
                component={OrderSummary}
                options={{
                  title: 'Resumen de Pedido',
                }}
              />
              <Stack.Screen
                name="OrderProgress"
                component={OrderProgress}
                options={{
                  title: 'Progreso de Pedido',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </OrdersState>
      </FirebaseState>
    </>
  );
};

export default App;
