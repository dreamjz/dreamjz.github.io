module.exports = {
  title: 'RPC',
  children: [
    {
      title: 'Protocol Buffers',
      sidebarDepth: 2,
      collapsable: true,
      children: [
        '/zh/rpc/protocol-buffers/preface',
        '/zh/rpc/protocol-buffers/basics-go',
        '/zh/rpc/protocol-buffers/language-guide-proto3.md',
      ],
    },
    {
      title: 'gRPC',
      sidebarDepth: 2,
      collapsable: true,
      children: ['/zh/rpc/gRPC/preface', '/zh/rpc/gRPC/quick_start'],
    },
  ],
};
