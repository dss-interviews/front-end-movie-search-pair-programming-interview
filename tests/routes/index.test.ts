import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { handler } from "../../routes/index.tsx";


Deno.test("should return empty search state when no parameters provided", async () => {
  // Arrange: Set up test data
  const request = new Request("http://localhost:8000/");
  const mockContext = {
    render: (data: any) => new Response(JSON.stringify(data))
  };
  
  // Act: Execute the code being tested
  if (!handler.GET) throw new Error('GET handler not found');
  const response = await handler.GET(request, mockContext as any);
  const data = await response.json();
  
  // Assert: Check the results
  assertEquals(data.query, "");
  assertEquals(data.movies, []);
  assertEquals(data.loading, false);
});