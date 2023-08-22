#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import "RNNotifications.h"
#import <Firebase.h>
#import <UserNotifications/UNUserNotificationCenter.h>

// @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>
@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
