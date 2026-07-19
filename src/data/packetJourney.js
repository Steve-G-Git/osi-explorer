export const packetJourneySteps = [
  {
    id: 'enter-address',
    number: 1,
    title: 'The user enters a website address',
    layerNumbers: [7],
    concept: 'Web browser and URL',
    explanation:
      'The journey begins when a user types a website address such as example.com into a browser. The browser identifies the hostname and prepares to find the server that hosts the site.',
    topicIds: ['http'],
  },
  {
    id: 'dns-resolution',
    number: 2,
    title: 'DNS resolves the hostname',
    layerNumbers: [7],
    concept: 'DNS',
    explanation:
      'The browser needs an IP address before it can contact the server. DNS translates the hostname into an IPv4 or IPv6 address, much like looking up a phone number from a name.',
    topicIds: ['dns', 'ipv4'],
  },
  {
    id: 'tcp-connection',
    number: 3,
    title: 'TCP establishes a connection',
    layerNumbers: [4],
    concept: 'TCP and ports',
    explanation:
      'For a normal HTTPS website, the client uses TCP to create a reliable connection to the server. TCP tracks the conversation, orders the data, and retransmits anything that is lost.',
    topicIds: ['tcp', 'ports'],
  },
  {
    id: 'tls-protection',
    number: 4,
    title: 'TLS protects the connection',
    layerNumbers: [6],
    concept: 'TLS encryption',
    explanation:
      'The client and server agree on encryption settings and verify the server certificate. TLS protects the data so other devices carrying it cannot easily read or alter the web traffic.',
    topicIds: [],
  },
  {
    id: 'http-request',
    number: 5,
    title: 'HTTP creates the request',
    layerNumbers: [7],
    concept: 'HTTP request',
    explanation:
      'The browser creates an HTTP request that asks the web server for a page or another resource. The request is placed inside the protected connection before being passed down the networking stack.',
    topicIds: ['http'],
  },
  {
    id: 'ip-decision',
    number: 6,
    title: 'IP decides whether the destination is local or remote',
    layerNumbers: [3],
    concept: 'IPv4 and routing',
    explanation:
      'The computer compares the destination IP address with its own address and subnet mask. If the destination is on another network, the packet must be sent to the default gateway.',
    topicIds: ['ipv4', 'routing-tables', 'default-gateway'],
  },
  {
    id: 'arp-resolution',
    number: 7,
    title: 'ARP resolves the default gateway’s MAC address',
    layerNumbers: [2, 3],
    concept: 'ARP and the ARP cache',
    explanation:
      'The remote server keeps its destination IP address, but the local Ethernet frame needs a local destination MAC address. ARP finds the MAC address of the default gateway so the frame can reach the router.',
    topicIds: ['arp', 'arp-cache', 'default-gateway', 'mac-addresses'],
  },
  {
    id: 'ethernet-frame',
    number: 8,
    title: 'Ethernet creates the frame',
    layerNumbers: [2],
    concept: 'Ethernet frame',
    explanation:
      'The network interface wraps the IP packet inside an Ethernet frame. The frame includes the computer’s source MAC address and the default gateway’s destination MAC address.',
    topicIds: ['ethernet', 'mac-addresses'],
  },
  {
    id: 'physical-signals',
    number: 9,
    title: 'The frame becomes physical signals',
    layerNumbers: [1],
    concept: 'Electrical, optical, or radio signals',
    explanation:
      'The frame is converted into bits and transmitted as electrical changes through copper, pulses of light through fiber, or radio waves through Wi-Fi.',
    topicIds: ['copper', 'fiber', 'wi-fi'],
  },
  {
    id: 'router-forwarding',
    number: 10,
    title: 'Routers forward the packet',
    layerNumbers: [3],
    concept: 'Routing tables and next hops',
    explanation:
      'Each router removes the incoming local frame, examines the packet’s destination IP address, checks its routing table, and creates a new local frame for the next link.',
    topicIds: ['routing-tables', 'ipv4'],
  },
  {
    id: 'server-processing',
    number: 11,
    title: 'The server decapsulates and processes the request',
    layerNumbers: [7, 6, 5, 4, 3, 2, 1],
    concept: 'Decapsulation',
    explanation:
      'At the server, each layer removes and processes its own information. The web application finally receives the HTTP request and prepares the requested page or data.',
    topicIds: ['http', 'tcp', 'ipv4', 'ethernet'],
  },
  {
    id: 'response-return',
    number: 12,
    title: 'The response travels back to the client',
    layerNumbers: [7, 6, 5, 4, 3, 2, 1],
    concept: 'Encapsulation and return traffic',
    explanation:
      'The server sends an HTTP response back through the same general stack. The data is encapsulated, routed across networks, delivered to the client, decrypted, and displayed by the browser.',
    topicIds: ['http', 'tcp', 'ipv4', 'ethernet'],
  },
]
