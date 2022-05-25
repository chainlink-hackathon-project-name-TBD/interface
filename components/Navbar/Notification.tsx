import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Text,
} from '@chakra-ui/react';
import { useSolidityEvents } from '../../hooks/useSolidityEvents';

const Notification = () => {
  const { gameStartedEventNotifications } = useSolidityEvents();

  return (
    <Popover>
      <PopoverTrigger>
        <button>
          <svg
            style={{
              height: '1.5rem',
              width: '1.5rem',
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Notifications!</PopoverHeader>
        <PopoverBody>
          {gameStartedEventNotifications.map((notif, index) => (
            <Text key={index}>
              Game for {notif.eventName} is started by the owner at time
            </Text>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default Notification;
