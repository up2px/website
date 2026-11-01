"use server";

export interface ContactFormData {
  name: string;
  email: string;
  product?: string;
  projectType?: string;
  query: string;
}

const DEFAULT_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1566428979756539975/tInuDJEFYeeSaXWHgV-Vx4USmNZxOD8m6Zhu72p4hj7Pd9W7lKIAGNYM9X5uaVp9Yuf1";

export async function sendContactToDiscord(formData: ContactFormData) {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

    // Validate required fields
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.query?.trim()) {
      return { success: false, error: "Please fill in all required fields." };
    }

    const payload = {
      username: "up2px Lead Bot",
      avatar_url: "https://up2px.com/square-logo.svg",
      content: `🔔 **New inquiry received from ${formData.name.trim()}**`,
      embeds: [
        {
          title: "🚀 New Project Inquiry — up2px",
          color: 0xff3b00, // #FF3B00 brand accent
          fields: [
            {
              name: "👤 Name",
              value: formData.name.trim(),
              inline: true,
            },
            {
              name: "✉️ Email",
              value: formData.email.trim(),
              inline: true,
            },
            {
              name: "🏷️ Project Type",
              value: formData.projectType?.trim() || "Not specified",
              inline: true,
            },
            {
              name: "🌐 Product / Current Website",
              value: formData.product?.trim() || "None provided",
              inline: false,
            },
            {
              name: "💬 Message / Query",
              value: formData.query.trim(),
              inline: false,
            },
          ],
          footer: {
            text: "up2px.com • Direct Lead Flow",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Discord webhook response error:", res.status, res.statusText);
      return { success: false, error: "Failed to send message to Discord." };
    }

    return { success: true };
  } catch (err) {
    console.error("sendContactToDiscord error:", err);
    return { success: false, error: "Server error sending message." };
  }
}
