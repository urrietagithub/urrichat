importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyA7XKmn8f1w6hAVUZaS8Eui7FAnZRy0Myg",
    projectId: "urrichatapp",
    messagingSenderId: "504734750650",
    appId: "1:504734750650:web:51a8def62934aabbeb2f83"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://img.icons8.com/color/96/chat--v1.png',
        vibrate: [200, 100, 200],
        badge: 'https://img.icons8.com/color/96/chat--v1.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});