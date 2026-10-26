const subscriptions = [
  { subscriptionId: 'SUB-001', customerName: 'Nguyen Van An', planTier: 'FAMILY', deviceLimit: 5, daysOverdue: 3, status: 'ACTIVE' },
  { subscriptionId: 'SUB-002', customerName: 'Tran Thi Mai', planTier: 'FAMILY', deviceLimit: 5, daysOverdue: 4, status: 'ACTIVE' }
];

for (let i = 0; i < subscriptions.length; i++) {
  if (subscriptions[i].daysOverdue > 0) {
    if (subscriptions[i].daysOverdue > 3) {
      subscriptions[i].planTier = 'FREE';
      subscriptions[i].deviceLimit = 1;
      subscriptions[i].status = 'EXPIRED';
    } else {
      subscriptions[i].status = 'GRACE_PERIOD';
    }
  }
}

console.log(subscriptions);