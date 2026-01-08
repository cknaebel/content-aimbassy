import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendAdminNotification, sendSubmitterConfirmation } from './email';

// Mock the fetch function
global.fetch = vi.fn();

describe('Email Notifications', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('sendAdminNotification', () => {
    it('should send admin notification email with video content details', async () => {
      // Mock successful email send
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        text: async () => 'Success',
      });

      const submission = {
        contactName: 'John Doe',
        email: 'john@example.com',
        phone: '+49 123 456789',
        company: 'Test Company',
        contentType: 'video' as const,
        contentGenres: JSON.stringify(['Films & Series', 'Documentaries']),
        totalHours: 500,
        contentDescription: 'High-quality documentary content',
        hasHD1080p: 'yes' as const,
        hasMP4Format: 'yes' as const,
        hasWatermarks: 'no' as const,
        rightsConfirmation: 'yes' as const,
        additionalNotes: 'Ready for immediate licensing',
      };

      const result = await sendAdminNotification(submission);

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      
      const fetchCall = (global.fetch as any).mock.calls[0];
      expect(fetchCall[0]).toContain('/notification/email');
      
      const fetchOptions = fetchCall[1];
      expect(fetchOptions.method).toBe('POST');
      expect(fetchOptions.headers['Content-Type']).toBe('application/json');
      expect(fetchOptions.headers['Authorization']).toContain('Bearer');
      
      const body = JSON.parse(fetchOptions.body);
      expect(body.to).toBe('ck@globalmediaconsult.com');
      expect(body.subject).toContain('VIDEO');
      expect(body.subject).toContain('John Doe');
      expect(body.html).toContain('John Doe');
      expect(body.html).toContain('john@example.com');
      expect(body.html).toContain('500 hours');
    });

    it('should send admin notification email with audio content details', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        text: async () => 'Success',
      });

      const submission = {
        contactName: 'Jane Smith',
        email: 'jane@example.com',
        contentType: 'audio' as const,
        contentGenres: JSON.stringify(['Podcasts & Interviews', 'Radio Shows & Broadcasts']),
        totalHours: 1500,
        contentDescription: 'Rare language podcast collection',
        audioFormat: 'mp3',
        hasTranscript: 'yes' as const,
        rightsConfirmation: 'yes' as const,
      };

      const result = await sendAdminNotification(submission);

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      
      const body = JSON.parse((global.fetch as any).mock.calls[0][1].body);
      expect(body.subject).toContain('AUDIO');
      expect(body.html).toContain('Jane Smith');
      expect(body.html).toContain('mp3');
      expect(body.html).toContain('1500 hours');
    });

    it('should handle email send failure gracefully', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        text: async () => 'Error sending email',
      });

      const submission = {
        contactName: 'Test User',
        email: 'test@example.com',
        contentType: 'video' as const,
        contentGenres: JSON.stringify(['Films & Series']),
        totalHours: 100,
        contentDescription: 'Test content',
        hasHD1080p: 'yes' as const,
        hasMP4Format: 'yes' as const,
        hasWatermarks: 'no' as const,
        rightsConfirmation: 'yes' as const,
      };

      const result = await sendAdminNotification(submission);

      expect(result).toBe(false);
    });
  });

  describe('sendSubmitterConfirmation', () => {
    it('should send confirmation email to submitter', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        text: async () => 'Success',
      });

      const result = await sendSubmitterConfirmation('John Doe', 'john@example.com');

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      
      const body = JSON.parse((global.fetch as any).mock.calls[0][1].body);
      expect(body.to).toBe('john@example.com');
      expect(body.subject).toContain('Thank You');
      expect(body.html).toContain('John Doe');
      expect(body.html).toContain('24-48 hours');
      expect(body.html).toContain('ck@globalmediaconsult.com');
    });

    it('should handle confirmation email failure', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      const result = await sendSubmitterConfirmation('Test User', 'test@example.com');

      expect(result).toBe(false);
    });
  });
});
