import { useState } from 'react';
import { setHours, setMinutes, subDays } from 'date-fns';

import { EventCalendar, type CalendarEvent } from '@/components/event-calendar';

const sampleEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Annual Planning',
    description: 'Strategic planning for next year',
    start: setMinutes(setHours(subDays(new Date(), 0), 15), 30),
    end: setMinutes(setHours(subDays(new Date(), 0), 16), 30),
    color: 'sky',
    location: 'Main Conference Hall',
  },
];

export function App() {
  const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);

  const handleEventAdd = (event: CalendarEvent) => {
    setEvents([...events, event]);
  };

  const handleEventUpdate = (updatedEvent: CalendarEvent) => {
    setEvents((events) => events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
  };

  const handleEventDelete = (eventId: string) => {
    setEvents((events) => events.filter((event) => event.id !== eventId));
  };

  return (
    <div className="min-h-dvh antialiased font-mulish">
      <main className="container mx-auto md:py-4 md:px-10 px-2">
        <EventCalendar events={events} onEventAdd={handleEventAdd} onEventUpdate={handleEventUpdate} onEventDelete={handleEventDelete} />
      </main>
    </div>
  );
}
