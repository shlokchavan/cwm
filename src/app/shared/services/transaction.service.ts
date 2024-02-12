import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  //   private apiUrl = 'https://your-api-domain.com/api/transactions';
  private apiUrl =
    // 'https://ap-south-1.aws.data.mongodb-api.com/app/data-ifxtr/endpoint/data/v1';
    'https://ap-south-1.aws.data.mongodb-api.com/app/data-dqcns/endpoint/data/v1';

  constructor(private http: HttpClient) {}

  // Fetch all transactions
  getAllTransactions(): Observable<Transaction[] | any[]> {
    const payload = {
      dataSource: 'Cluster0',
      database: 'cwm-db',
      collection: 'transaction',
    };
    return this.http.post<Transaction[] | any[]>(
      `${this.apiUrl}/action/find`,
      payload,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Request-Headers': '*',
          'api-key': `QRH0hoUg41Me0oNaGfma4kxz001J9zypwepZYEqpJTaOpRfeUTZJL3GNUg4G5DUd`,
        },
      }
    );
  }

  // Get a single transaction by ID
  getTransactionById(id: number): Observable<Transaction> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Transaction>(url);
  }

  // Create a new transaction
  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }

  // Update a transaction
  updateTransaction(transaction: Transaction): Observable<Transaction> {
    const url = `${this.apiUrl}/${transaction.id}`;
    return this.http.put<Transaction>(url, transaction);
  }

  // Delete a transaction
  deleteTransaction(id: number): Observable<Transaction> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Transaction>(url);
  }
}
