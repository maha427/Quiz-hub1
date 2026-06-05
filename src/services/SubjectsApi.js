import axios from "axios";

const API_URL =
  "http://127.0.0.1:5000";

export const fetchSubjects =
  async () => {

    const token =
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwianRpIjoiNWQ4NGNlNTgtMzQzMC00YjI3LWE0YmItZDBhNzFkZjZlMjVjIiwidHlwZSI6ImFjY2VzcyIsImlzX3N1cGVyYWRtaW4iOmZhbHNlLCJleHAiOjE3Nzk5ODU1OTAsImlhdCI6MTc3OTk4MTk5MH0.5kQ5fj9adzWHmcUhDHoxLl5LXtN-6fzBfKWRLpMOxPQ"

    const { data } =
      await axios.get(
        `${API_URL}/subjects`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,

            "X-Workspace-Id": 1,
          },
        }
      );

    return data.subjects || [];
  };